import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import ErrorMessage from '../components/ErrorMessage';
import formatMoney from '../lib/formatMoney';
import OrderItemsStyles from '../components/styles/OrderItemStyles';
import styled from 'styled-components';

const USER_ORDER_QUERY = gql`
  query USER_ORDER_QUERY {
    allOrders {
      id
      charge
      total
      user {
        id
      }
      items {
        id
        name
        description
        price
        quantity
        photo {
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

const OrderUI = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 4rem;
`;

function countItemsInAnOrder(order) {
  return order.items.reduce((tally, item) => tally + item.quantity, 0);
}

export default function OrderPage() {
  const { data, error, loading } = useQuery(USER_ORDER_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorMessage error={error} />;

  const { allOrders } = data;

  return (
    <div>
      <Head>
        <title>Your Orders ({allOrders.length}) </title>
      </Head>
      <h2>You have {allOrders.length} orders!</h2>
      <OrderUI>
        {allOrders.map((order) => (
          <OrderItemsStyles>
            <Link href={`/order/${order.id}`}>
              <a>
                <div className="order-meta">
                  <p>
                    {countItemsInAnOrder(order)}
                    {countItemsInAnOrder(order) > 1 ? ' Items' : ' item'}
                  </p>
                  <p>
                    {order.items.length} product
                    {order.items.length === 1 ? '' : 's'}
                  </p>
                  <p>{formatMoney(order.total)} </p>
                </div>
                <div className="images">
                  {order.items.map((item) => (
                    <img
                      key={item.id}
                      src={item?.photo?.image?.publicUrlTransformed}
                      alt={item.name}
                    />
                  ))}
                </div>
              </a>
            </Link>
          </OrderItemsStyles>
        ))}
      </OrderUI>
    </div>
  );
}
