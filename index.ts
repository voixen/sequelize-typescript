// annotations
export {AutoIncrement} from "./lib/annotations/AutoIncrement";
export {AllowNull} from "./lib/annotations/AllowNull";
export {BelongsTo} from "./lib/annotations/association/BelongsTo";
export {BelongsToMany} from "./lib/annotations/association/BelongsToMany";
export {Column} from "./lib/annotations/Column";
export {Default} from "./lib/annotations/Default";
export {DefaultScope} from "./lib/annotations/DefaultScope";
export {ForeignKey} from "./lib/annotations/ForeignKey";
export {HasMany} from "./lib/annotations/association/HasMany";
export {HasOne} from "./lib/annotations/association/HasOne";
export {PrimaryKey} from "./lib/annotations/PrimaryKey";
export {Scopes} from "./lib/annotations/Scopes";
export {Table} from "./lib/annotations/Table";
export {CreatedAt} from "./lib/annotations/CreatedAt";
export {DeletedAt} from "./lib/annotations/DeletedAt";
export {UpdatedAt} from "./lib/annotations/UpdatedAt";
export {Unique} from "./lib/annotations/Unique";
export {Comment} from "./lib/annotations/Comment";

export {Contains} from "./lib/annotations/validation/Contains";
export {Equals} from "./lib/annotations/validation/Equals";
export {Is} from "./lib/annotations/validation/Is";
export {IsAfter} from "./lib/annotations/validation/IsAfter";
export {IsAlpha} from "./lib/annotations/validation/IsAlpha";
export {IsAlphanumeric} from "./lib/annotations/validation/IsAlphanumeric";
export {IsBefore} from "./lib/annotations/validation/IsBefore";
export {IsCreditCard} from "./lib/annotations/validation/IsCreditCard";
export {IsDate} from "./lib/annotations/validation/IsDate";
export {IsDecimal} from "./lib/annotations/validation/IsDecimal";
export {IsEmail} from "./lib/annotations/validation/IsEmail";
export {IsFloat} from "./lib/annotations/validation/IsFloat";
export {IsIn} from "./lib/annotations/validation/IsIn";
export {IsInt} from "./lib/annotations/validation/IsInt";
export {IsIP} from "./lib/annotations/validation/IsIP";
export {IsIPv4} from "./lib/annotations/validation/IsIPv4";
export {IsArray} from "./lib/annotations/validation/IsArray";
export {IsIPv6} from "./lib/annotations/validation/IsIPv6";
export {IsLowercase} from "./lib/annotations/validation/IsLowercase";
export {IsNull} from "./lib/annotations/validation/IsNull";
export {IsNumeric} from "./lib/annotations/validation/IsNumeric";
export {IsUppercase} from "./lib/annotations/validation/IsUppercase";
export {IsUrl} from "./lib/annotations/validation/IsUrl";
export {IsUUID} from "./lib/annotations/validation/IsUUID";
export {Length} from "./lib/annotations/validation/Length";
export {Max} from "./lib/annotations/validation/Max";
export {Min} from "./lib/annotations/validation/Min";
export {Not} from "./lib/annotations/validation/Not";
export {NotContains} from "./lib/annotations/validation/NotContains";
export {NotEmpty} from "./lib/annotations/validation/NotEmpty";
export {NotIn} from "./lib/annotations/validation/NotIn";
export {NotNull} from "./lib/annotations/validation/NotNull";
export {Validate} from "./lib/annotations/validation/Validate";
export {Validator} from "./lib/annotations/validation/Validator";

// hooks
export {BeforeValidate} from "./lib/annotations/hooks/BeforeValidate";
export {AfterValidate} from "./lib/annotations/hooks/AfterValidate";
export {ValidationFailed} from "./lib/annotations/hooks/ValidationFailed";
export {BeforeCreate} from "./lib/annotations/hooks/BeforeCreate";
export {AfterCreate} from "./lib/annotations/hooks/AfterCreate";
export {BeforeDestroy} from "./lib/annotations/hooks/BeforeDestroy";
export {AfterDestroy} from "./lib/annotations/hooks/AfterDestroy";
export {BeforeRestore} from "./lib/annotations/hooks/BeforeRestore";
export {AfterRestore} from "./lib/annotations/hooks/AfterRestore";
export {BeforeUpdate} from "./lib/annotations/hooks/BeforeUpdate";
export {AfterUpdate} from "./lib/annotations/hooks/AfterUpdate";
export {BeforeSave} from "./lib/annotations/hooks/BeforeSave";
export {AfterSave} from "./lib/annotations/hooks/AfterSave";
export {BeforeUpsert} from "./lib/annotations/hooks/BeforeUpsert";
export {AfterUpsert} from "./lib/annotations/hooks/AfterUpsert";
export {BeforeBulkCreate} from "./lib/annotations/hooks/BeforeBulkCreate";
export {AfterBulkCreate} from "./lib/annotations/hooks/AfterBulkCreate";
export {BeforeBulkDestroy} from "./lib/annotations/hooks/BeforeBulkDestroy";
export {AfterBulkDestroy} from "./lib/annotations/hooks/AfterBulkDestroy";
export {BeforeBulkRestore} from "./lib/annotations/hooks/BeforeBulkRestore";
export {AfterBulkRestore} from "./lib/annotations/hooks/AfterBulkRestore";
export {BeforeBulkUpdate} from "./lib/annotations/hooks/BeforeBulkUpdate";
export {AfterBulkUpdate} from "./lib/annotations/hooks/AfterBulkUpdate";
export {BeforeFind} from "./lib/annotations/hooks/BeforeFind";
export {BeforeFindAfterExpandIncludeAll} from "./lib/annotations/hooks/BeforeFindAfterExpandIncludeAll";
export {BeforeFindAfterOptions} from "./lib/annotations/hooks/BeforeFindAfterOptions";
export {AfterFind} from "./lib/annotations/hooks/AfterFind";
export {BeforeCount} from "./lib/annotations/hooks/BeforeCount";
export {BeforeDelete} from "./lib/annotations/hooks/BeforeDelete";
export {AfterDelete} from "./lib/annotations/hooks/AfterDelete";
export {BeforeBulkDelete} from "./lib/annotations/hooks/BeforeBulkDelete";
export {AfterBulkDelete} from "./lib/annotations/hooks/AfterBulkDelete";

// interfaces
export {IAssociationActionOptions} from "./lib/interfaces/IAssociationActionOptions";
export {IBuildOptions} from "./lib/interfaces/IBuildOptions";
export {IDefineScopeOptions} from "./lib/interfaces/IDefineScopeOptions";
export {IFindOptions} from "./lib/interfaces/IFindOptions";
export {ICountOptions} from "./lib/interfaces/ICountOptions";
export {ICreateOptions} from "./lib/interfaces/ICreateOptions";
export {IIncludeAssociation} from "./lib/interfaces/IIncludeAssociation";
export {IIncludeOptions} from "./lib/interfaces/IIncludeOptions";
export {IPartialDefineAttributeColumnOptions} from "./lib/interfaces/IPartialDefineAttributeColumnOptions";
export {IScopeFindOptions} from "./lib/interfaces/IScopeFindOptions";
export {IScopeIncludeAssociation} from "./lib/interfaces/IScopeIncludeAssociation";
export {IScopeIncludeOptions} from "./lib/interfaces/IScopeIncludeOptions";
export {IScopeOptions} from "./lib/interfaces/IScopeOptions";
export {ISequelizeConfig} from "./lib/interfaces/ISequelizeConfig";
export {ISequelizeUriConfig} from "./lib/interfaces/ISequelizeUriConfig";
export {ISequelizeForeignKeyConfig} from "./lib/interfaces/ISequelizeForeignKeyConfig";
export {ISequelizeValidationOnlyConfig} from "./lib/interfaces/ISequelizeValidationOnlyConfig";

// enums
export {DataType} from "./lib/enums/DataType";

// models
export {Model} from "./lib/models/Model";
export {Sequelize} from "./lib/models/Sequelize";
import {Sequelize} from "./lib/models/Sequelize";




var semver = require('semver');
var util = require('util');
var _ = require('lodash');

var QueryGenerator = require('sequelize/lib/dialects/postgres/query-generator.js');
var QueryTypes = require('sequelize/lib/query-types.js');
var DataTypes = require('sequelize/lib/data-types.js');

// Copied from Sequelize.
function inherits(constructor, superConstructor) {
  util.inherits(constructor, superConstructor); // Instance (prototype) methods
  _.extend(constructor, superConstructor); // Static methods
}

var upsertIssueURL = "https://github.com/cockroachdb/cockroach/issues/6637";

// upsertQueryV3 provides upsert support for Sequelize 3.x., using INSERT with
// an ON CONFLICT clause. This overrides the Sequelize implementation for
// Postgres, which uses a temporary stored procedure to handle upserts.
//
// Unlike the implementations of this method by other dialects, this method has
// no return value.
var upsertQueryV3 = function(tableName, insertValues, updateValues, where, rawAttributes, options) {
  var self = this;
  if (options.returning) {
    throw new Error("RETURNING not supported with INSERT .. ON CONFLICT. See " + upsertIssueURL);
  }

  // Though this is an upsert, we want Sequelize to treat this as an INSERT.
  // Sequelize treats upserts in Postgres as a call to a temporary stored
  // procedure, which has a different return type than an INSERT.
  options.type = QueryTypes.INSERT;
  delete options.returning;

  // Create base INSERT query.
  var insert = this.insertQuery(tableName, insertValues, rawAttributes, options);
  if (insert.slice(-1) !== ";") {
    throw new Error("expected but did not find terminating semicolon in INSERT query");
  }
  insert = insert.slice(0, -1);

  // Create the ON CONFLICT clause, using the primary key as the target.
  const  pkCols: any = [];
  Object.keys(rawAttributes).forEach(function(key) {
    if (rawAttributes[key].primaryKey) {
      pkCols.push(self.quoteIdentifier(rawAttributes[key].field));
    }
  });
  var onConflictSet = Object.keys(updateValues).map(function (key) {
    key = this.quoteIdentifier(key);
    return key + ' = excluded.'+key;
  }, this).join(', ');

  return insert + " ON CONFLICT (" + pkCols.join(',') + ") DO UPDATE SET " + onConflictSet + ";";
};

// upsertQueryV4 provides upsert support for Sequelize 4.x., using INSERT with
// an ON CONFLICT clause. This overrides the Sequelize implementation for
// Postgres, which uses a temporary stored procedure to handle upserts.
//
// Unlike the implementations of this method by other dialects, this method has
// no return value.
//
// This is mostly a copy of upsertQueryV3, so that this version can evolve
// independently of the V3 version.
var upsertQueryV4 = function(tableName, insertValues, updateValues, where, model, options) {
  var self = this;
  if (options.returning) {
    throw new Error("RETURNING not supported with INSERT .. ON CONFLICT. See " + upsertIssueURL);
  }

  // Though this is an upsert, we want Sequelize to treat this as an INSERT.
  // Sequelize treats upserts in Postgres as a call to a temporary stored
  // procedure, which has a different return type than an INSERT.
  options.type = QueryTypes.INSERT;
  delete options.returning;

  // Create base INSERT query.
  var insert = this.insertQuery(tableName, insertValues, model.rawAttributes, options);
  if (insert.slice(-1) !== ";") {
    throw new Error("expected but did not find terminating semicolon in INSERT query");
  }
  insert = insert.slice(0, -1);

  // Create the ON CONFLICT clause, using the primary key as the target.
  const pkCols: any = [];
  Object.keys(model.rawAttributes).forEach(function(key) {
    if (model.rawAttributes[key].primaryKey) {
      pkCols.push(self.quoteIdentifier(model.rawAttributes[key].field));
    }
  });
  var onConflictSet = Object.keys(updateValues).map(function (key) {
    key = this.quoteIdentifier(key);
    return key + ' = excluded.'+key;
  }, this).join(', ');

  return insert + " ON CONFLICT (" + pkCols.join(',') + ") DO UPDATE SET " + onConflictSet + ";";
}

// Install the right version of upsertQuery for the Sequelize version we're
// running with.
var sequelizeVersion = require('sequelize/package.json').version;
if (semver.satisfies(sequelizeVersion, '4.x')) {
  QueryGenerator.upsertQuery = upsertQueryV4;
} else if (semver.satisfies(sequelizeVersion, '3.x')) {
  QueryGenerator.upsertQuery = upsertQueryV3;
} else {
  throw new Error("Sequelize version " + sequelizeVersion + " is unsupported");
}

/*// The JavaScript number type cannot represent all 64-bit integers--it can only
// exactly represent integers in the range [-2^53 + 1, 2^53 - 1]. Notably,
// CockroachDB's unique_rowid() function returns values outside the
// representable range.
//
// We must teach Sequelize's INTEGER and BIGINT types to accept stringified
// numbers instead of just raw JavaScript numbers; it's otherwise impossible to
// store a number outside the representable range into a CockroachDB INT column.
[DataTypes.postgres.INTEGER, DataTypes.postgres.BIGINT].forEach(function (intType) {
  // Disable escaping so that the returned string is not wrapped in quotes
  // downstream. Valid integers cannot be dangerous, and we take care to reject
  // invalid integers.
  intType.prototype.escape = false;

  intType.prototype.$stringify = intType.prototype._stringify = function stringify(value) {
    var rep = String(value);
    if (!/^[-+]?[0-9]+$/.test(rep)) {
      throw new Sequelize.ValidationError(util.format("%j is not a valid integer", value));
    }
    return rep;
  }
});*/

// Semi-cribbed from sequelize/lib/dialects/sqlite/data-types.js which also
// implements a TEXT-based alternative to ENUM.
// Since this is just TEXT, the only thing this really gives a user is an
// assertion that an inserted value is a member of the enum upon insertion, but
// even then, this check is only performed if the user opts in to type
// validation when initializing Sequelize.
let enumType: any = function() {
  if (!(this instanceof enumType)) {
    const obj = Object.create(enumType.prototype);
    enumType.apply(obj, arguments);
    return obj;
  }
  // We can't just defer to DataTypes.ENUM(...) here because it would like its
  // argument to be an instanceof ENUM, which we can't provide since that would
  // opt us into Postgres-specific ENUM codepaths, so this is largely an
  // inlining of DataTypes.ENUM(...).
  let value = arguments[0];
  const options = typeof value === 'object' && !Array.isArray(value) && value || {
    values: Array.prototype.slice.call(arguments).reduce((result, element) => {
      return result.concat(Array.isArray(element) ? element : [element]);
    }, [])
  };
  this.values = options.values;
  this.options = options;
}

enumType.extend = oldType => new enumType(oldType.options);
enumType.prototype.toSql = function toSql() { return 'TEXT'; };
enumType.prototype.key = 'ENUM';
enumType.prototype.validate = DataTypes.ENUM.prototype.validate;

// If we inherit from ENUM then Sequelize does a bunch of extra stuff because
// it thinks that we're Postgres.
inherits(enumType, DataTypes.TEXT);

DataTypes.postgres.ENUM = enumType;

(Sequelize as any).supportsCockroachDB = true;




