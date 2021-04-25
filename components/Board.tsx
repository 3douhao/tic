import Cell from './Cell'

type CellValue = 'x' | 'o' | undefined

const cells: CellValue[] = Array(9).fill(undefined)

export default function Board() {
  return (
    <div className='mx-auto mt-24 bg-gray-600 border border-16 border-green-600 grid grid-cols-3 grid-rows-3 gap-4 text-center w-96 h-96'>
      {cells.map((value, index) => (
        <Cell key={index}>{index}</Cell>
      ))}
    </div>
  )
}
