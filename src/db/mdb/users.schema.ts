import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';

@Schema({ versionKey: false }) //? usamos el decorador Schema para definir un esquema de mongo de usuarios
class Users {
  //* definimos  el esquema de la colección de usuarios
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  email: string;

  @Prop({ default: Date.now() })
  created_date: Date;

  @Prop({ default: false })
  logicalDelete: boolean;
}

export const UserSchema = SchemaFactory.createForClass(Users); //? creamos el esquema de mongo a partir de la clase User

export type UserDocument = Users & Document; //? creamos el documento de Users

export type UserModel = Model<Users>; //? creamos el modelo de usuarios para ejecutar queries
