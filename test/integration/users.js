// test/integration/users.js

const web3 = require("web3")

const utils = require("../utils")
const {assertVMException} = utils

//Get the hexTostring function from web3:
const {
  utils:{ hexToString},
} = web3

const UserStorage = artifacts.require('UserStorage')
const UserController = artifacts.require("UserController")

contract('users', () => {

  it("can't create user without controller",async() => {
    const storage = await UserStorage.deployed()

    try{
      await storage.createUser("tristan")
      assert.fail()
    } catch(err){
      assertVMException(err);
    }
  })

  it("can create user with controller", async () => {
    const controller = await UserController.deployed()

    const tx = await controller.createUser("tristan")

    assert.isOk(tx) // Add this line!
  });

  
  it("can get user" , async () => {
    const storage = await UserStorage.deployed()
    const userId = 1

    //Get the userInfo array
    const userInfo = await storage.profiles.call(userId)

    //Get the second element (the username)
    const username = userInfo[1]

    assert.equal(hexToString(username),"tristan")
  })

})