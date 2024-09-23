import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function DonationsTable({ aportes }) {
  const totalAmount = aportes.reduce((total, aporte) => {
    const amount = parseFloat(aporte.totalAmount.replace('$', ''))
    return total + amount
  }, 0)

  return (
    <Table>
      <TableCaption>Listado de tus donaciones.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Aporte</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className='text-right'>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {aportes.map((aporte, index) => (
          <TableRow key={index}>
            <TableCell className='font-medium'>{aporte.aporte}</TableCell>
            <TableCell>{aporte.paymentStatus}</TableCell>
            <TableCell>{aporte.paymentMethod}</TableCell>
            <TableCell className='text-right'>{aporte.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className='text-right'>
            ${totalAmount.toFixed(2)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
