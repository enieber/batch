import { Schema, model, Document } from 'mongoose';
import * as Joi from 'joi';

/**
 * This is a procedure. Can be anything
 *
 * @export
 * @class Procedure
 */
export default class Procedure {
  private _id: string;
  private _name: string;
  private _description: string;
  private _position: number;

  /**
   *Creates an instance of RankItem.
   * @param {*} id The id of the item
   * @param {*} name The name of the item
   * @param {*} description The description of the item
   * @param {*} position The position that the item is in the queue
   * @memberof RankItem
   */
  constructor(id, name, description, position) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._position = position;
  }

  public static Validator = Joi.object().keys({
    name: Joi.string(),
    description: Joi.string(),
    poistion: Joi.number(),
  });

  //#region Mongo

  /**
   * The mongo Scheme for this class
   *
   * @static
   * @memberof Procedure
   */
  static Schema: Schema = new Schema({
    name: String,
    description: String,
    position: Number,
  });

  /**
   * The mongo Model for this classe
   *
   * @static
   * @memberof Procedure
   */
  static Model = model('Procedure', Procedure.Schema);

  /**
   * Return the model of the Object, the diference between this and @see{@link Model} it's that this function already returns the model filled
   *
   * @returns {Document} Returns the document filled
   * @memberof Procedure
   */
  public getModel(): Document {
    return new Procedure.Model({
      name: this.name,
      description: this.description,
      position: this.position,
    });
  }

  //#endregion

  //#region Getters

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get position(): number {
    return this._position;
  }

  //#endregion
}
