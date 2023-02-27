import { getModelForClass, prop } from "@typegoose/typegoose";

export class Book {
  @prop({ required: true, type: () => String })
  title!: string;

  @prop({ required: true, type: () => String })
  author!: string;

  @prop({ required: true, index: true, type: () => Date })
  publicationDate!: Date;

  @prop({ type: () => String })
  summary?: string;
}

export const BookModel = getModelForClass(Book);
