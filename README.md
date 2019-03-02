# astronauts

> 📦 Like.. the simplest, most flexible, data storage ever.

## Example

```tsx
import { Store, useStore } from 'astronauts';

const store = new Store({ id: '/* your astronauts id */' });

const ReactHookComponent = () => {
  const { user } = useStore({
    user: store.use('users')
      .first()
      .where({
        firstName: 'Fred',
      })
      .data({
        firstName: '',
        role: 'standard',
        company: null,
        favourites: store.use('candies')
          .stage({
            $lookup: {
              from: 'companies',
              localField: '_id',
              foreignField: 'treats',
              as: 'maker',
            },
          })
          .stage({
            $group: {
              _id: 'color',
              name: '$name',
              maker: '$maker',
            },
          })
          .data({
            name: '',
            color: '',
          });
        friends: ({ id }) => store.use('friendship')
          .first()
          .where({
            $or: [
              { primary: id },
              { secondary: id },
            ],
          })
          .data({
            age: 0,
            primary: ({ id }) => store.use('user')
              .where({ id })
              .data({
                name: '',
                email: (_, { name }) => `${name}@example.com`,
              }),
            secondary: ({ id }) => store.use('user')
              .where({ id })
              .data({
                name: '',
                email: '',
              }),
          });
      });
  });
  return (
    <div>
      <h1>{user.firstName}: {user.role}</h1>
      <input
        value={user.firstName.value}
        onChange={event => user.firstName.change(event.target.value)}
      />
      {companies.map(({ id, name }) => (
        <div key={id} onClick={() => user.company.change(id)}>{name}</div>
      ))}
    </div>
  );
};
```
