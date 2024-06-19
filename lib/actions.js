'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from "./meals";
import { revalidatePath } from 'next/cache';

function isInvalidText(text) {

  return !text || text === '';
  
}

export async function shareMeal(prevState ,formData) {

  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('creator_email')
  }

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.image) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: 'Invalid Input'
    }
    // throw new Error('Invalid Input')
  }

  await saveMeal(meal);
  revalidatePath('/meals');
  redirect('/meals')
}