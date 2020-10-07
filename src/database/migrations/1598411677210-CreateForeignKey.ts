import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class CreateForeignKey1598411677210 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey('anamnesis',
            new TableForeignKey({
                name: 'AnamnesisPatients',
                columnNames: ['patient_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'patients',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('conducts',
            new TableForeignKey({
                name: 'ConductsPatients',
                columnNames: ['patient_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'patients',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            })
        );
        await queryRunner.createForeignKey('exams',
            new TableForeignKey({
                name: 'ExamsPatients',
                columnNames: ['patient_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'patients',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            })
        );
        await queryRunner.createForeignKey('patients_adjuncts',
            new TableForeignKey({
                name: 'PatientsAdjunctsPatients',
                columnNames: ['patient_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'patients',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            })
        );
        await queryRunner.createForeignKey('ratings',
            new TableForeignKey({
                name: 'RatingsPatients',
                columnNames: ['patient_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'patients',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            })
        );
        await queryRunner.createForeignKey('recipes',
            new TableForeignKey({
                name: 'RecipesPatients',
                columnNames: ['patient_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'patients',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('anamnesis','AnamnesisPatients');
        await queryRunner.dropForeignKey('conducts','ConductsPatients');
        await queryRunner.dropForeignKey('exams','ExamsPatients');
        await queryRunner.dropForeignKey('patients_adjuncts','PatientsAdjunctsPatients');
        await queryRunner.dropForeignKey('ratings','RatingsPatients');
        await queryRunner.dropForeignKey('recipes','RecipesPatients');

    }

}
