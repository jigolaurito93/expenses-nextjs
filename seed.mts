import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { faker } from '@faker-js/faker';

dotenv.config({path: '.env.local'});
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE
)

const categories = [
    "Housing",
    "Transport",
    "Health",
    "Food",
    "Education",
    "Other",
  ];

  type TransactionType = 'Income' | 'Expense' | 'Saving' | 'Investment';

  type Transaction = {
        type: TransactionType;
        category?: string;
        amount: number;
        created_at: Date;
        description?: string;
  }

  async function seed() {

    const transactions = [];

    for (let i = 0; i < 10; i++){
        const created_at = faker.date.past(); 

        let type:TransactionType, category:Transaction
        
        const typeBias = Math.random();
        if (typeBias < 0.80){
            type = "Expense";
            category = faker.helpers.arrayElement(categories);
        } else if (typeBias < 0.90){
            type = "Income";
        } else {
            type = faker.helpers.arrayElement(['Saving', 'Investment']);
        }

        let amount:Transaction['amount'];

        switch (type) {
            case 'Income':
                amount = faker.number.int({
                    min: 2000,
                    max: 9000
                })
                break;
            case 'Expense':
                amount = faker.number.int({
                    min: 10,
                    max: 1000
                })
                break;
            case 'Saving':
                case 'Investment':
                amount = faker.number.int({
                    min: 3000,
                    max: 10000
                })
                break;
        }
        transactions.push({
            type,
            category,
            amount,
            created_at,
            description: faker.lorem.sentence()
        })
    }
    const { error } =  await supabase.from('transsactions').insert(transactions);

    if (error){
        console.log('There was an error inserting the data', error);
    } else {
        console.log('Data inserted successfully');
    }
}

seed().catch(console.error);