import payload from 'payload'
/** @type {import('payload/types').CollectionConfig} */

const todo = {
    slug: "todo",
    access: {
        read: () => true,
        update: () => true,
        delete: () => true,
        create: () => true,

    },

    hooks: {
        afterOperation: [
            async (args) => {
                if (args.operation == "create") {
                    payload.create({
                        collection: "log",
                        data: {
                            collectionName: "todo",
                            action : "create",
                            timestamp: new Date()
                        },
                    });
                } else if (args.operation == "update") {
                    payload.create({
                        collection: "log",
                        data: {
                            collectionName: "todo",
                            action : "update",
                            timestamp: new Date()
                        },
                    });
                } else if (args.operation == "delete") {
                    payload.create({
                        collection: "log",
                        data: {
                            collectionName: "todo",
                            action : "delete",
                            timestamp: new Date()
                        },
                    });
                } 
            },
        ],
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
    //   {
    //     name: "completed",
    //     type: "radio",
    //     option: [
    //         {   
    //             label: "Yes",
    //             value: "yes",
    //         },
    //         {
    //             label: "No",
    //             value: "no",
    //         }
    //     ],
    //     defaultValue: "no"
    //   }
    ],
  };
  
  export default todo;
  