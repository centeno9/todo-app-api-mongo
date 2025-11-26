import * as joi from 'joi';

export default joi.object({
  DB_URL: joi.string().required(),
  DB_NAME: joi.string().required(),
});
