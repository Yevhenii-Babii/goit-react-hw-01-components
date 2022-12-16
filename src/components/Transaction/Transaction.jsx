
import PropTypes from 'prop-types';
import { Container } from './Transaction.styled';
export function Transaction({items}) { 
    return (
        <Container>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>

          <tbody>
{items.map(item => (
    
              <tr key={item.id}>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
              </tr>
              ))}
          </tbody>
        </Container>
      );
    };
    
    Transaction.prototype = {
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id:PropTypes.string.isRequired,
                type:PropTypes.string.isRequired,
                amount:PropTypes.string.isRequired,
                currency:PropTypes.string.isRequired,
            }).isRequired
        )
    }
