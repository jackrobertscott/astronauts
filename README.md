# astronauts

> 📦 Like.. the simplest, most flexible, data storage ever.

## Example

```tsx
import { Store, useStore } from 'astronauts';

const store = new Store({ id: '/* your astronauts id */' });

const ReactHookComponent = () => {
  const { user } = useStore({
    user: store.single('users')
      .filter({
        match: { firstName: 'Fred' },
      })
      .data({
        firstName: '',
        role: 'standard',
      });
  });
  return (
    <div>
      <h1>{user.firstName}: {user.role}</h1>
      <input
        value={user.firstName.value}
        onChange={event => user.firstName.change(event.target.value)}
      />
    </div>
  );
};
```
