const markov = require('./markov')

describe('test markov machine', function() {
    test('test making chains', function() {
        let newChain = new markov.MarkovMachine('a b c a B C a B c')
        expect(newChain.chain).toEqual(new Map([
            ['a', ['b', 'B', 'B']],
            ['b', ['c']],
            ['c', ['a', null]],
            ['B', ['C', 'c']],
            ['C', ['a']]
        ]))
    })

    test('choice form array', function(){
        expect(markov.MarkovMachine.choice([3,3,3])).toEqual(3)
        expect([1,2,3,4,5]).toContain(markov.MarkovMachine.choice([1,2,3,4,5]))
    })
})