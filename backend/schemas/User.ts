import { rules, permissions } from './../access';
import { list } from '@keystone-next/keystone/schema';
import { text, password, relationship } from '@keystone-next/fields';

// named exports
export const User = list({
  access: {
    create: () => true,
    read: rules.canManageUsers,
    update: rules.canManageUsers,
    // Only people with the permission can delete themself, you can't delete yourself
    delete: permissions.canManageUsers,
    // permissions: you must have the checkbox under your role
    // Rules: either checkbox or yourself
  },
  ui: {
    // Hide the backend UI from regular users
    hideCreate: (args) => !permissions.canManageUsers(args),
    hideDelete: (args) => !permissions.canManageUsers(args),
  },
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password(),
    cart: relationship({
      ref: 'CartItem.user',
      many: true,
      ui: {
        createView: {
          fieldMode: 'hidden',
        },
        itemView: { fieldMode: 'read' },
      },
    }),
    // TODO, add roles, cart and orders
    orders: relationship({ ref: 'Order.user', many: true }),
    role: relationship({
      ref: 'Role.assignedTo',
      access: {
        create: permissions.canManageUsers,
        update: permissions.canManageUsers,
      },
    }),
    products: relationship({
      ref: 'Product.user',
      many: true,
    }),
  },
});
