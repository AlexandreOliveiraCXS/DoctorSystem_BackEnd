import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AlterPatientFieldAddressId1598411412478 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('patients', 
            new TableColumn({
                name:'address_id',
                type:'uuid',
                isNullable: true,
            })
        );

        await queryRunner.createForeignKey('patients',
            new TableForeignKey({
                name: 'PatientsAddress',
                columnNames: ['address_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'address',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('patients','PatientsAddress');

        await queryRunner.dropColumn('patients', 'address_id');
    }

}
