import * as Styled from './style'
// import { FaTrash, FaEdit} from 'react-icons/fa'

const Grid = () => {
  return (
        <Styled.Table>
            <Styled.Thead>
                <Styled.Tr></Styled.Tr>
                    <Styled.Th>Name</Styled.Th>
                    <Styled.Th>Series</Styled.Th>
                    <Styled.Th>Repetitons</Styled.Th>
                    <Styled.Th></Styled.Th>
                    <Styled.Th></Styled.Th>
                <Styled.Tr></Styled.Tr>
            </Styled.Thead>
        </Styled.Table>
  )
}

export default Grid
