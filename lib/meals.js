import fs from 'node:fs'
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import { Stream } from 'node:stream';
import Meals from '@/app/meals/page';
import { S3 } from '@aws-sdk/client-s3';

const s3 = new S3({
    region: 'us-east-1'
});

const db = sql('meals.db');

export async function getMeals(){
    await new Promise((resolve) => setTimeout(resolve, 5000))
    // throw new Error('Loading meals failed')
    return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
    return db.prepare('SELECT * From meals WHERE slug = ?').get(slug)
}

export async function saveMeal(meal) {
    meal.slug = slugify(meal.title, {lower: true});
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split('.').pop();
    const imageName = `${meal.slug}.${extension}`;

    const bufferedImage = await meal.image.arrayBuffer();

    s3.putObject({
        Bucket: 'istafamarshall-nextjs-food-app-users-image',
        Key: imageName,
        Body: Buffer.from(bufferedImage),
        ContentType: meal.image.type,
    });

    meal.image = imageName;

    db.prepare(`
        INSERT INTO Meals
            (title, summary, instructions, creator, creator_email, image, slug)
        VALUES (
            @title,
            @summary,
            @instructions,
            @creator,
            @creator_email,
            @image,
            @slug
        )
    `).run(meal);
}