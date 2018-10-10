import Procedure from '../models/Procedure';

async function returnHighest(key: string): Promise<number> {
  const query = await Procedure.Model.find()
    .sort({ [key]: -1 })
    .limit(1);

  if (query.length < 1) {
    return 0;
  }

  const object = query[0].toObject() as Procedure;
  return object.position;
}

export default returnHighest;
