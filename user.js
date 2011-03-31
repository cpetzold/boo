var mongoose = require('../support/mongoose'),
    document = mongoose.define;

document('User')
  .oid('_id')
  .string('phrase');