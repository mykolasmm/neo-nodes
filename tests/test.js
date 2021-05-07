const { generateText } = require('../src/index')
const { neo } = require('../src/index')

test('Basic example', () => {
    const board = [
        '00',
        '0.']
    const nodes = neo(2, 2, board)
    expect(nodes[0]).toBe('0 0 1 0 0 1')
    expect(nodes[1]).toBe('1 0 -1 -1 -1 -1')
    expect(nodes[2]).toBe('0 1 -1 -1 -1 -1')
})

test('Horizontal example', () => {
    const board = ['0.0.0']
    const nodes = neo(5, 1, board)
    expect(nodes[0]).toBe('0 0 2 0 -1 -1')
    expect(nodes[1]).toBe('2 0 4 0 -1 -1')
    expect(nodes[2]).toBe('4 0 -1 -1 -1 -1')
})

test('Vertical example', () => {
    const board = [
        '0',
        '0',
        '0',
        '0']
    const nodes = neo(1, 4, board)
    expect(nodes[0]).toBe('0 0 -1 -1 0 1')
    expect(nodes[1]).toBe('0 1 -1 -1 0 2')
    expect(nodes[2]).toBe('0 2 -1 -1 0 3')
    expect(nodes[3]).toBe('0 3 -1 -1 -1 -1')
})

test('Square', () => {
    const board = [
        '0.0',
        '...',
        '0.0']
    const nodes = neo(3, 3, board)
    expect(nodes[0]).toBe('0 0 2 0 0 2')
    expect(nodes[1]).toBe('2 0 -1 -1 2 2')
    expect(nodes[2]).toBe('0 2 2 2 -1 -1')
    expect(nodes[3]).toBe('2 2 -1 -1 -1 -1')
})

test('T shape', () => {
    const board = [
        '000',
        '.0.',
        '.0.']
    const nodes = neo(3, 3, board)
    expect(nodes[0]).toBe('0 0 1 0 -1 -1')
    expect(nodes[1]).toBe('1 0 2 0 1 1')
    expect(nodes[2]).toBe('2 0 -1 -1 -1 -1')
    expect(nodes[3]).toBe('1 1 -1 -1 1 2')
    expect(nodes[4]).toBe('1 2 -1 -1 -1 -1')
})

test('Diagonal', () => {
    const board = [
        '0...',
        '.0..',
        '..0.',
        '...0']
    const nodes = neo(4, 4, board)
    expect(nodes[0]).toBe('0 0 -1 -1 -1 -1')
    expect(nodes[1]).toBe('1 1 -1 -1 -1 -1')
    expect(nodes[2]).toBe('2 2 -1 -1 -1 -1')
    expect(nodes[3]).toBe('3 3 -1 -1 -1 -1')
})

test('Complex', () => {
    const board = [
        '00.0',
        '0.00',
        '.0.0',
        '000.']
    const nodes = neo(4, 4, board)
    expect(nodes[0]).toBe('0 0 1 0 0 1')
    expect(nodes[1]).toBe('1 0 3 0 0 2')
    expect(nodes[2]).toBe('3 0 -1 -1 3 1')
    expect(nodes[3]).toBe('0 1 2 1 0 3')
    expect(nodes[4]).toBe('2 1 3 1 2 3')
    expect(nodes[5]).toBe('3 1 -1 -1 3 2')
    expect(nodes[6]).toBe('1 2 3 2 1 3')
    expect(nodes[7]).toBe('3 2 -1 -1 -1 -1')
    expect(nodes[8]).toBe('0 3 1 3 -1 -1')
    expect(nodes[9]).toBe('1 3 2 3 -1 -1')
    expect(nodes[10]).toBe('2 3 -1 -1 -1 -1')
})

test('Final Boss', () => {
    const board = [
        '..0....',
        '.......',
        '..0.0.0',
        '.......',
        '0.0.0..',
        '.......',
        '....0..']
    const nodes = neo(7, 7, board)
    expect(nodes[0]).toBe('2 0 -1 -1 2 2')
    expect(nodes[1]).toBe('2 2 4 2 2 4')
    expect(nodes[2]).toBe('4 2 6 2 4 4')
    expect(nodes[3]).toBe('6 2 -1 -1 -1 -1')
    expect(nodes[4]).toBe('0 4 2 4 -1 -1')
    expect(nodes[5]).toBe('2 4 4 4 -1 -1')
    expect(nodes[6]).toBe('4 4 -1 -1 4 6')
    expect(nodes[7]).toBe('4 6 -1 -1 -1 -1')
})
