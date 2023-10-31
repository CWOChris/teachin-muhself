const assert = require('assert')
const randomRickandMorty = require('../index')


test('Character Should Not Return Length of 0 ', () => {

    let testCharacter = randomRickandMorty.rickAndMortyCharacter();
    assert.notStrictEqual(testCharacter.length, 0)
})

test('Character Should Not Return Value "" ', () => {

    let testCharacter = randomRickandMorty.rickAndMortyCharacter();
    assert.notStrictEqual(testCharacter, "")
})

test('Character Should Be String ', () => {

    let testCharacter = randomRickandMorty.rickAndMortyCharacter();
    assert.strictEqual(typeof testCharacter, 'string')
})

