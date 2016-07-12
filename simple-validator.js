var matchesSchema = function(schema, object) {
	if(Validator.isFunction(schema)){
		return schema(object);
	}else if(Validator.isObject(schema)){
		if(!Validator.isObject(object)){
			return false;
		}

		for(var key in schema){
			var s = schema[key];
			var o = object[key];
			if(!matchesSchema(s,o)){return false;}
		}

		return true;
	}else{
		return object === schema;
	}
};

var Validator = function(schema) {
	return function(object) {
		return matchesSchema(schema, object);
	};
};

Validator.isTruthy = function(v) { return !!v; };

Validator.isFalsy = function(v) { return !v; };

Validator.isNull = function(v) { return v === null; };

Validator.isNotNull = function(v) { return v !== null; };

Validator.isUndefined = function(v) { return v === undefined; };

Validator.isNotUndefined = function(v) { return v !== undefined; };

Validator.isNullOrUndefined = function(v) { return v == null; };

Validator.isNotNullOrUndefined = function(v) { return v != null; };

Validator.exists = Validator.isNotNullOrUndefined;

Validator.equals = function(w) {
	return function(v) {
		return v === w;
	};
};

Validator.isOneOf = function(){
	var values = arguments;

	return function(param) {
		for(var i=0;i<values.length;i++) { if(param === values[i]){ return true; } }
		return false;
	};
};

Validator.isNoneOf = function() {
	var values = arguments;

	return function(v) {
		for(var i=0;i<values.length;i++) { if(v === values[i]) { return false; } }
		return true;
	};
};

Validator.matchesOneOf = function(){
	var values = arguments;

	return function(v){
		for(var i=0;i<values.length;i++) { if(values[i](v)) { return true; } }
		return false;
	};
};

Validator.optional = function(validator) {	
	return function(v){
		return (v === null) || (v === undefined) || validator(v);
	};
};




Validator.Boolean = {};

Validator.Boolean.isBoolean = function(v) { return (typeof(v) === 'boolean') || (v instanceof Boolean); };

Validator.Boolean.isTrue = function(v) { return v === true; };

Validator.Boolean.isFalse = function(v) { return v === false; };



Validator.Number = {};

Validator.Number.isNumber = function(v) { return (typeof(v) === 'number') || (v instanceof Number); };

Validator.Number.isZero = function(v) { return v === 0; };

Validator.Number.isNonZero = function(v) { return v !== 0; };

Validator.Number.isPositive = function(v) { return v > 0 };

Validator.Number.isNegative = function(v) { return v < 0 };

Validator.Number.isInteger = Number.isInteger || function(v) {
	return typeof v === 'number' && 
		isFinite(value) && 
		Math.floor(value) === value;
};




Validator.String = {};

Validator.String.isString = function(v) { return (typeof(v) === 'string') || (v instanceof String); };

Validator.String.isEmpty = function(v) { return v === ''; };

Validator.String.isNotEmpty = function(v) { return v !== ''; };

Validator.String.isLength = function(len) {
	return function(v) {
		return Validator.isString(v) && v.length === 0;
	};
};

Validator.String.matches = function(regex) {
	return function(v) {
		return Validator.isString(v) && regex.test(v);
	};
};

var EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

Validator.String.isProbablyEmail = function(v) {
	return Validator.isString(v) && EMAIL_REGEX.test(v);
};

var BASE64_REGEX = /[^-A-Za-z0-9+\/=]|=[^=]|={3,}$/;

Validator.String.isProbablyBase64 = function(v) {
	return Validator.isString(v) && BASE64_REGEX.test(v);
};

var DATA_URL_REGEX = /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i;

Validator.String.isProbablyDataURL = function(v) {
	return Validator.isString(v) && DATA_URL_REGEX.test(v);
};





Validator.Function = {};

Validator.Function.isFunction = function (v) { return (typeof(v) === 'function'); };




Validator.Object = {};

Validator.Object.isObject = function (v) { return v !== null && ((typeof(v)==='function') || (typeof(v)==='object')); };

var matchesSchema = function(schema, object) {
	if(Validator.isFunction(schema)){
		return schema(object);
	}else if(Validator.isObject(schema)){
		if(!Validator.isObject(object)){
			return false;
		}

		for(var key in schema){
			var s = schema[key];
			var o = object[key];
			if(!matchesSchema(s,o)){return false;}
		}

		return true;
	}else{
		return object === schema;
	}
};

Validator.Object.matches = Validator;

Validator.Array = {};

Validator.Array.isArray = Array.isArray || function(v) {
    return Object.prototype.toString.call(v) === '[object Array]';
};

Validator.Array.isLength = function(len) {
	return function(v){
		return v.length === len;
	};
};

Validator.Array.isArrayOf = function(validator) {
	return function(v){
		for(var i=0; i<v.length; i++){
			if(!validator(v[i])) { return false; }
		}
		return true;
	};
};




Validator.isBoolean = Validator.Boolean.isBoolean;
Validator.isNumber = Validator.Number.isNumber;
Validator.isString = Validator.String.isString;
Validator.isFunction = Validator.Function.isFunction;
Validator.isObject = Validator.Object.isObject;
Validator.isArray = Validator.Array.isArray;


module.exports = Validator;


