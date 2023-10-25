/** @type {import('payload/types').CollectionConfig} */

const todo = {
    slug: "todo",
    access: {
        read: () => true,
        update: () => true,
        delete: () => true,
        create: () => true,

    },
    fields: [
      {
        name: "task",
        type: "text",
        required: true,
      },
      {
        name: "category", 
        type: "relationship",
        relationTo: "category", 
        hasMany: false, 
      },
      {
        name: "Priorities",
        type: "radio",
        options: [
          {
            label: "Urgent",
            value: "yes",
          },
          {
            label: "Not Urgent",
            value: "no",
          },
        ],
        defaultValue: "Not Urgent",
        admin: {
          layout: "vertical",
        },
      },
    ],
  };
  
  export default todo;
  