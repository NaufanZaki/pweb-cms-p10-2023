import payload from 'payload'
/** @type {import('payload/types').CollectionConfig} */
const category = {
    slug: "category",
    admin: {
        useAsTitle: "name"
    },

    hooks: {
        afterOperation: [
            async (args) => {
                if (args.operation == "create") {
                    payload.create({
                        collection: "log",
                        data: {
                            collectionName: "category",
                            action : "create",
                            timestamp: new Date()
                        },
                    });
                } else if (args.operation == "update") {
                    payload.create({
                        collection: "log",
                        data: {
                            collectionName: "category",
                            action : "update",
                            timestamp: new Date()
                        },
                    });
                } else if (args.operation == "delete") {
                    payload.create({
                        collection: "log",
                        data: {
                            collectionName: "category",
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
        name: "name",
        type: "text",
        required: true,
      },
    ],
  };
  
  export default category;
  