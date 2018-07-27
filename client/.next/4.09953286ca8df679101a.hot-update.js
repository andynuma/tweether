webpackHotUpdate(4,{

/***/ "./web3/artifacts/UserController.json":
/***/ (function(module, exports) {

module.exports = {"contractName":"UserController","abi":[{"constant":false,"inputs":[{"name":"_managerAddr","type":"address"}],"name":"setManagerAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"ownerAddr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_username","type":"bytes32"}],"name":"createUser","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x6060604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506104ca806100536000396000f300606060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680637978b231146100675780639c675eaa146100a0578063abf7bfd8146100f5578063f2fde38b14610130575b600080fd5b341561007257600080fd5b61009e600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610169565b005b34156100ab57600080fd5b6100b3610208565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561010057600080fd5b61011a60048080356000191690602001909190505061022d565b6040518082815260200191505060405180910390f35b341561013b57600080fd5b610167600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506103c4565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156101c457600080fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1692508273ffffffffffffffffffffffffffffffffffffffff1663bf40fac16000604051602001526040518163ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180806020018281038252600b8152602001807f5573657253746f72616765000000000000000000000000000000000000000000815250602001915050602060405180830381600087803b151561030057600080fd5b6102c65a03f1151561031157600080fd5b5050506040518051905091508190508073ffffffffffffffffffffffffffffffffffffffff1663abf7bfd8866000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b151561039f57600080fd5b6102c65a03f115156103b057600080fd5b505050604051805190509350505050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561041f57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561045b57600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a723058205e114b61935c61d5ae36d0a8a10959d49915d85701875cfd396238489b3811740029","deployedBytecode":"0x606060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680637978b231146100675780639c675eaa146100a0578063abf7bfd8146100f5578063f2fde38b14610130575b600080fd5b341561007257600080fd5b61009e600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610169565b005b34156100ab57600080fd5b6100b3610208565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561010057600080fd5b61011a60048080356000191690602001909190505061022d565b6040518082815260200191505060405180910390f35b341561013b57600080fd5b610167600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506103c4565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156101c457600080fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1692508273ffffffffffffffffffffffffffffffffffffffff1663bf40fac16000604051602001526040518163ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180806020018281038252600b8152602001807f5573657253746f72616765000000000000000000000000000000000000000000815250602001915050602060405180830381600087803b151561030057600080fd5b6102c65a03f1151561031157600080fd5b5050506040518051905091508190508073ffffffffffffffffffffffffffffffffffffffff1663abf7bfd8866000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b151561039f57600080fd5b6102c65a03f115156103b057600080fd5b505050604051805190509350505050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561041f57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561045b57600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a723058205e114b61935c61d5ae36d0a8a10959d49915d85701875cfd396238489b3811740029","sourceMap":"128:373:6:-;;;212:10:3;200:9;;:22;;;;;;;;;;;;;;;;;;128:373:6;;;;;;","deployedSourceMap":"128:373:6:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;150:105:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;47:24:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;176:323:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;235:144:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;150:105:1;130:9:3;;;;;;;;;;;116:23;;:10;:23;;;108:32;;;;;;;;236:12:1;222:11;;:26;;;;;;;;;;;;;;;;;;150:105;:::o;47:24:3:-;;;;;;;;;;;;;:::o;176:323:6:-;230:4;246:24;312;383;289:11;;;;;;;;;;;246:55;;339:8;:19;;;:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;312:61;;422:16;383:56;;458:12;:23;;;482:9;458:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;451:41;;176:323;;;;;;:::o;235:144:3:-;130:9;;;;;;;;;;;116:23;;:10;:23;;;108:32;;;;;;;;337:1;316:23;;:9;:23;;;;308:32;;;;;;;;363:9;351;;:21;;;;;;;;;;;;;;;;;;235:144;:::o","source":"pragma solidity ^0.4.19;\n\nimport \"../helpers/BaseController.sol\";\nimport \"../ContractManager.sol\";\nimport \"./UserStorage.sol\";\n\ncontract UserController  is BaseController{\n    function createUser(bytes32 _username) public returns(uint) {\n        ContractManager _manager = ContractManager(managerAddr);\n\n        address _userStorageAddr = _manager.getAddress(\"UserStorage\");\n        UserStorage _userStorage = UserStorage(_userStorageAddr); \n\n        return _userStorage.createUser(_username);\n    }\n}","sourcePath":"/Users/andy/tweether/tweether/contracts/users/UserController.sol","ast":{"absolutePath":"/Users/andy/tweether/tweether/contracts/users/UserController.sol","exportedSymbols":{"UserController":[282]},"id":283,"nodeType":"SourceUnit","nodes":[{"id":244,"literals":["solidity","^","0.4",".19"],"nodeType":"PragmaDirective","src":"0:24:6"},{"absolutePath":"/Users/andy/tweether/tweether/contracts/helpers/BaseController.sol","file":"../helpers/BaseController.sol","id":245,"nodeType":"ImportDirective","scope":283,"sourceUnit":74,"src":"26:39:6","symbolAliases":[],"unitAlias":""},{"absolutePath":"/Users/andy/tweether/tweether/contracts/ContractManager.sol","file":"../ContractManager.sol","id":246,"nodeType":"ImportDirective","scope":283,"sourceUnit":54,"src":"66:32:6","symbolAliases":[],"unitAlias":""},{"absolutePath":"/Users/andy/tweether/tweether/contracts/users/UserStorage.sol","file":"./UserStorage.sol","id":247,"nodeType":"ImportDirective","scope":283,"sourceUnit":329,"src":"99:27:6","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":[],"baseName":{"contractScope":null,"id":248,"name":"BaseController","nodeType":"UserDefinedTypeName","referencedDeclaration":73,"src":"156:14:6","typeDescriptions":{"typeIdentifier":"t_contract$_BaseController_$73","typeString":"contract BaseController"}},"id":249,"nodeType":"InheritanceSpecifier","src":"156:14:6"}],"contractDependencies":[73,149],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":282,"linearizedBaseContracts":[282,73,149],"name":"UserController","nodeType":"ContractDefinition","nodes":[{"body":{"id":280,"nodeType":"Block","src":"236:263:6","statements":[{"assignments":[257],"declarations":[{"constant":false,"id":257,"name":"_manager","nodeType":"VariableDeclaration","scope":281,"src":"246:24:6","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_contract$_ContractManager_$53","typeString":"contract ContractManager"},"typeName":{"contractScope":null,"id":256,"name":"ContractManager","nodeType":"UserDefinedTypeName","referencedDeclaration":53,"src":"246:15:6","typeDescriptions":{"typeIdentifier":"t_contract$_ContractManager_$53","typeString":"contract ContractManager"}},"value":null,"visibility":"internal"}],"id":261,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":259,"name":"managerAddr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":60,"src":"289:11:6","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":258,"name":"ContractManager","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":53,"src":"273:15:6","typeDescriptions":{"typeIdentifier":"t_type$_t_contract$_ContractManager_$53_$","typeString":"type(contract ContractManager)"}},"id":260,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"273:28:6","typeDescriptions":{"typeIdentifier":"t_contract$_ContractManager_$53","typeString":"contract ContractManager"}},"nodeType":"VariableDeclarationStatement","src":"246:55:6"},{"assignments":[263],"declarations":[{"constant":false,"id":263,"name":"_userStorageAddr","nodeType":"VariableDeclaration","scope":281,"src":"312:24:6","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":262,"name":"address","nodeType":"ElementaryTypeName","src":"312:7:6","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"id":268,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"5573657253746f72616765","id":266,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"359:13:6","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_debaa55f7d082c9901660eadd80a0cb32c005b09c1b66bf1d91c135662933850","typeString":"literal_string \"UserStorage\""},"value":"UserStorage"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_stringliteral_debaa55f7d082c9901660eadd80a0cb32c005b09c1b66bf1d91c135662933850","typeString":"literal_string \"UserStorage\""}],"expression":{"argumentTypes":null,"id":264,"name":"_manager","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":257,"src":"339:8:6","typeDescriptions":{"typeIdentifier":"t_contract$_ContractManager_$53","typeString":"contract ContractManager"}},"id":265,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"getAddress","nodeType":"MemberAccess","referencedDeclaration":36,"src":"339:19:6","typeDescriptions":{"typeIdentifier":"t_function_external_view$_t_string_memory_ptr_$returns$_t_address_$","typeString":"function (string memory) view external returns (address)"}},"id":267,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"339:34:6","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"VariableDeclarationStatement","src":"312:61:6"},{"assignments":[270],"declarations":[{"constant":false,"id":270,"name":"_userStorage","nodeType":"VariableDeclaration","scope":281,"src":"383:24:6","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_contract$_UserStorage_$328","typeString":"contract UserStorage"},"typeName":{"contractScope":null,"id":269,"name":"UserStorage","nodeType":"UserDefinedTypeName","referencedDeclaration":328,"src":"383:11:6","typeDescriptions":{"typeIdentifier":"t_contract$_UserStorage_$328","typeString":"contract UserStorage"}},"value":null,"visibility":"internal"}],"id":274,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":272,"name":"_userStorageAddr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":263,"src":"422:16:6","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":271,"name":"UserStorage","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":328,"src":"410:11:6","typeDescriptions":{"typeIdentifier":"t_type$_t_contract$_UserStorage_$328_$","typeString":"type(contract UserStorage)"}},"id":273,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"410:29:6","typeDescriptions":{"typeIdentifier":"t_contract$_UserStorage_$328","typeString":"contract UserStorage"}},"nodeType":"VariableDeclarationStatement","src":"383:56:6"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":277,"name":"_username","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":251,"src":"482:9:6","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bytes32","typeString":"bytes32"}],"expression":{"argumentTypes":null,"id":275,"name":"_userStorage","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":270,"src":"458:12:6","typeDescriptions":{"typeIdentifier":"t_contract$_UserStorage_$328","typeString":"contract UserStorage"}},"id":276,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"createUser","nodeType":"MemberAccess","referencedDeclaration":327,"src":"458:23:6","typeDescriptions":{"typeIdentifier":"t_function_external_nonpayable$_t_bytes32_$returns$_t_uint256_$","typeString":"function (bytes32) external returns (uint256)"}},"id":278,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"458:34:6","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":255,"id":279,"nodeType":"Return","src":"451:41:6"}]},"id":281,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"createUser","nodeType":"FunctionDefinition","parameters":{"id":252,"nodeType":"ParameterList","parameters":[{"constant":false,"id":251,"name":"_username","nodeType":"VariableDeclaration","scope":281,"src":"196:17:6","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":250,"name":"bytes32","nodeType":"ElementaryTypeName","src":"196:7:6","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"}],"src":"195:19:6"},"payable":false,"returnParameters":{"id":255,"nodeType":"ParameterList","parameters":[{"constant":false,"id":254,"name":"","nodeType":"VariableDeclaration","scope":281,"src":"230:4:6","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":253,"name":"uint","nodeType":"ElementaryTypeName","src":"230:4:6","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"229:6:6"},"scope":282,"src":"176:323:6","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":283,"src":"128:373:6"}],"src":"0:501:6"},"legacyAST":{"absolutePath":"/Users/andy/tweether/tweether/contracts/users/UserController.sol","exportedSymbols":{"UserController":[282]},"id":283,"nodeType":"SourceUnit","nodes":[{"id":244,"literals":["solidity","^","0.4",".19"],"nodeType":"PragmaDirective","src":"0:24:6"},{"absolutePath":"/Users/andy/tweether/tweether/contracts/helpers/BaseController.sol","file":"../helpers/BaseController.sol","id":245,"nodeType":"ImportDirective","scope":283,"sourceUnit":74,"src":"26:39:6","symbolAliases":[],"unitAlias":""},{"absolutePath":"/Users/andy/tweether/tweether/contracts/ContractManager.sol","file":"../ContractManager.sol","id":246,"nodeType":"ImportDirective","scope":283,"sourceUnit":54,"src":"66:32:6","symbolAliases":[],"unitAlias":""},{"absolutePath":"/Users/andy/tweether/tweether/contracts/users/UserStorage.sol","file":"./UserStorage.sol","id":247,"nodeType":"ImportDirective","scope":283,"sourceUnit":329,"src":"99:27:6","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":[],"baseName":{"contractScope":null,"id":248,"name":"BaseController","nodeType":"UserDefinedTypeName","referencedDeclaration":73,"src":"156:14:6","typeDescriptions":{"typeIdentifier":"t_contract$_BaseController_$73","typeString":"contract BaseController"}},"id":249,"nodeType":"InheritanceSpecifier","src":"156:14:6"}],"contractDependencies":[73,149],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":282,"linearizedBaseContracts":[282,73,149],"name":"UserController","nodeType":"ContractDefinition","nodes":[{"body":{"id":280,"nodeType":"Block","src":"236:263:6","statements":[{"assignments":[257],"declarations":[{"constant":false,"id":257,"name":"_manager","nodeType":"VariableDeclaration","scope":281,"src":"246:24:6","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_contract$_ContractManager_$53","typeString":"contract ContractManager"},"typeName":{"contractScope":null,"id":256,"name":"ContractManager","nodeType":"UserDefinedTypeName","referencedDeclaration":53,"src":"246:15:6","typeDescriptions":{"typeIdentifier":"t_contract$_ContractManager_$53","typeString":"contract ContractManager"}},"value":null,"visibility":"internal"}],"id":261,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":259,"name":"managerAddr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":60,"src":"289:11:6","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":258,"name":"ContractManager","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":53,"src":"273:15:6","typeDescriptions":{"typeIdentifier":"t_type$_t_contract$_ContractManager_$53_$","typeString":"type(contract ContractManager)"}},"id":260,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"273:28:6","typeDescriptions":{"typeIdentifier":"t_contract$_ContractManager_$53","typeString":"contract ContractManager"}},"nodeType":"VariableDeclarationStatement","src":"246:55:6"},{"assignments":[263],"declarations":[{"constant":false,"id":263,"name":"_userStorageAddr","nodeType":"VariableDeclaration","scope":281,"src":"312:24:6","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":262,"name":"address","nodeType":"ElementaryTypeName","src":"312:7:6","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"id":268,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"5573657253746f72616765","id":266,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"359:13:6","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_debaa55f7d082c9901660eadd80a0cb32c005b09c1b66bf1d91c135662933850","typeString":"literal_string \"UserStorage\""},"value":"UserStorage"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_stringliteral_debaa55f7d082c9901660eadd80a0cb32c005b09c1b66bf1d91c135662933850","typeString":"literal_string \"UserStorage\""}],"expression":{"argumentTypes":null,"id":264,"name":"_manager","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":257,"src":"339:8:6","typeDescriptions":{"typeIdentifier":"t_contract$_ContractManager_$53","typeString":"contract ContractManager"}},"id":265,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"getAddress","nodeType":"MemberAccess","referencedDeclaration":36,"src":"339:19:6","typeDescriptions":{"typeIdentifier":"t_function_external_view$_t_string_memory_ptr_$returns$_t_address_$","typeString":"function (string memory) view external returns (address)"}},"id":267,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"339:34:6","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"VariableDeclarationStatement","src":"312:61:6"},{"assignments":[270],"declarations":[{"constant":false,"id":270,"name":"_userStorage","nodeType":"VariableDeclaration","scope":281,"src":"383:24:6","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_contract$_UserStorage_$328","typeString":"contract UserStorage"},"typeName":{"contractScope":null,"id":269,"name":"UserStorage","nodeType":"UserDefinedTypeName","referencedDeclaration":328,"src":"383:11:6","typeDescriptions":{"typeIdentifier":"t_contract$_UserStorage_$328","typeString":"contract UserStorage"}},"value":null,"visibility":"internal"}],"id":274,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":272,"name":"_userStorageAddr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":263,"src":"422:16:6","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":271,"name":"UserStorage","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":328,"src":"410:11:6","typeDescriptions":{"typeIdentifier":"t_type$_t_contract$_UserStorage_$328_$","typeString":"type(contract UserStorage)"}},"id":273,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"410:29:6","typeDescriptions":{"typeIdentifier":"t_contract$_UserStorage_$328","typeString":"contract UserStorage"}},"nodeType":"VariableDeclarationStatement","src":"383:56:6"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":277,"name":"_username","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":251,"src":"482:9:6","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bytes32","typeString":"bytes32"}],"expression":{"argumentTypes":null,"id":275,"name":"_userStorage","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":270,"src":"458:12:6","typeDescriptions":{"typeIdentifier":"t_contract$_UserStorage_$328","typeString":"contract UserStorage"}},"id":276,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"createUser","nodeType":"MemberAccess","referencedDeclaration":327,"src":"458:23:6","typeDescriptions":{"typeIdentifier":"t_function_external_nonpayable$_t_bytes32_$returns$_t_uint256_$","typeString":"function (bytes32) external returns (uint256)"}},"id":278,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"458:34:6","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":255,"id":279,"nodeType":"Return","src":"451:41:6"}]},"id":281,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"createUser","nodeType":"FunctionDefinition","parameters":{"id":252,"nodeType":"ParameterList","parameters":[{"constant":false,"id":251,"name":"_username","nodeType":"VariableDeclaration","scope":281,"src":"196:17:6","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":250,"name":"bytes32","nodeType":"ElementaryTypeName","src":"196:7:6","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"}],"src":"195:19:6"},"payable":false,"returnParameters":{"id":255,"nodeType":"ParameterList","parameters":[{"constant":false,"id":254,"name":"","nodeType":"VariableDeclaration","scope":281,"src":"230:4:6","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":253,"name":"uint","nodeType":"ElementaryTypeName","src":"230:4:6","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"229:6:6"},"scope":282,"src":"176:323:6","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":283,"src":"128:373:6"}],"src":"0:501:6"},"compiler":{"name":"solc","version":"0.4.19+commit.c4cbbb05.Emscripten.clang"},"networks":{"1532496655395":{"events":{},"links":{},"address":"0x6dfa308ba60913279c67fc9b4aabda63967b5726","transactionHash":"0x1740698d99e11a0594333c0ffdb9ea326e2b9c9496c809ad2146bc112d6b7fc1"},"1532605352080":{"events":{},"links":{},"address":"0xc7711c3e2dcf0478b0234989b244d2b974675b9f","transactionHash":"0x1b7bf073237e7eb9043861f520799b0678bfc34d32f39f5b8188193a194e239a"},"1532680979798":{"events":{},"links":{},"address":"0xb219b4a404d01a6718f6840892f0bb910905e181","transactionHash":"0x1b7bf073237e7eb9043861f520799b0678bfc34d32f39f5b8188193a194e239a"}},"schemaVersion":"2.0.0","updatedAt":"2018-07-27T08:44:21.960Z"}

/***/ }),

/***/ "./web3/users.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUserInfo; });
/* unused harmony export createUser */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__provider__ = __webpack_require__("./web3/provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__artifacts_UserStorage_json__ = __webpack_require__("./web3/artifacts/UserStorage.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__artifacts_UserStorage_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__artifacts_UserStorage_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__artifacts_UserController_json__ = __webpack_require__("./web3/artifacts/UserController.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__artifacts_UserController_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__artifacts_UserController_json__);


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }




var getUserInfo =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(userId) {
    var storage, profile;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(__WEBPACK_IMPORTED_MODULE_1__provider__["b" /* getInstance */])(__WEBPACK_IMPORTED_MODULE_2__artifacts_UserStorage_json___default.a);

          case 2:
            storage = _context.sent;
            _context.next = 5;
            return storage.profiles.call(userId);

          case 5:
            profile = _context.sent;
            return _context.abrupt("return", profile);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getUserInfo(_x) {
    return _ref.apply(this, arguments);
  };
}();
var createUser =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(username) {
    var controller, addresess, result;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Object(__WEBPACK_IMPORTED_MODULE_1__provider__["b" /* getInstance */])(__WEBPACK_IMPORTED_MODULE_3__artifacts_UserController_json___default.a);

          case 2:
            controller = _context2.sent;
            _context2.next = 5;
            return __WEBPACK_IMPORTED_MODULE_1__provider__["a" /* eth */].getAccounts();

          case 5:
            addresess = _context2.sent;
            _context2.next = 8;
            return controller.createUser(username, {
              from: addresses[0]
            });

          case 8:
            result = _context2.sent;
            return _context2.abrupt("return", result);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function createUser(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ })

})
//# sourceMappingURL=4.09953286ca8df679101a.hot-update.js.map