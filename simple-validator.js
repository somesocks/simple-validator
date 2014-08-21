var isNull = function(param){
	return (param === null);
};

var isNotNull = function(param){
	return !(param === null);
};

var isUndefined = function(param){
	return (param === undefined);
};

var isNotUndefined = function(param){
	return !(param === undefined);
};

var isNullOrUndefined = function(param){
	return isNull(param) || isUndefined(param);
};

var isNotNullOrUndefined = function(param){
	return !(isNull(param) || isUndefined(param));
};

var isString = function(param){
	return (typeof(param) === 'string') || (param instanceof String);
};

var isBoolean = function(param){
	return (typeof(param) === 'boolean') || (param instanceof Boolean);
};

var isFunction = function(param){
	return (typeof(param) === 'function');
};

var isObject = function(param){
	if(param === null){return false;}
	return ((typeof(param)==='function') || (typeof(param)==='object'));
};

var validate = function(schema,object){
	if(isFunction(schema)){
		return schema(object);
	}else{
		if(!isObject(object)){
			return false;
		}

		for(key in schema){
			var s = schema[key];
			var o = object[key];
			if(!validate(s,o)){return false;}
		}

		return true;
	}
}

Validator = function(schema){
	var validator = function(obj){
		return validate(schema,obj);
	};

	return validator;
};

Validator.isNull = function(){return isNull;};
Validator.isNotNull = function(){return isNotNull;};
Validator.isUndefined = function(){return isUndefined};
Validator.isNotUndefined = function(){return isNotUndefined};
Validator.isNullOrUndefined = function(){return isNullOrUndefined;};
Validator.isNotNullOrUndefined = function(){return isNotNullOrUndefined;};
Validator.exists = isNotNullOrUndefined;
Validator.isString = function(){return isString;};
Validator.isBoolean = function(){return isBoolean;};
Validator.isFunction = function(){return isFunction};
Validator.isObject = function(){return isObject;};

Validator.equals = function(value){
	return function(param){
		return (param === value);
	};
};

Validator.isOneOf = function(){
	var values = arguments;

	return function(param){
		for(var i=0;i<values.length;i++){
			if(param === values[i]){
				return true;
			}
		}
		return false;
	};
};

Validator.validate = validate;

module.exports = Validator;
