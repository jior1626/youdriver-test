import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class UserMethodPaymentMigration1673938598863 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // queryRunner.createTable(
        //     // new Table({
        //     //     name: 'app_user_method_payment',
        //     //     columns: [
        //     //         {
        //     //             name: 'id',
        //     //             type: 'bigint',
        //     //             isPrimary: true,
        //     //             isGenerated: true,
        //     //             generationStrategy: 'increment',
        //     //         },
        //     //         {   
        //     //             name: 'username',
        //     //             type: 'varchar',
        //     //             isNullable: false,
        //     //         },
        //     //         {
        //     //             name: 'type',
        //     //             type: 'varchar',
        //     //             isNullable: false,
        //     //         },
        //     //         {
        //     //             name: 'email',
        //     //             type: 'varchar',
        //     //             isNullable: false,
        //     //         },
        //     //         {
        //     //             name: 'phone',
        //     //             type: 'varchar',
        //     //             isNullable: false,
        //     //         },
        //     //     ],
        //     // }),
        //     // true,
        // )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
