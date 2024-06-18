import fs from 'node:fs'
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import { Stream } from 'node:stream';
import Meals from '@/app/meals/page';

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
    const mealInfo = `${meal.slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${mealInfo}`);
    const bufferedImage = await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error)=>{
        if(error){
            throw new Error('Saving image failed!')
        }
    } );

    meal.image = `/images/${mealInfo}`

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