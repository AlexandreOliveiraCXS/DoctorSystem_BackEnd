import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePatientsAdjunct1598406732065 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "patients_adjuncts",
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default:'uuid_generate_v4()'
                },
                {
                    name: 'patient_id',
                    type: 'uuid',
                    isNullable: false
                },                
                {
                    name: 'height',
                    type: 'decimal',
                    isNullable: true
                },
                {
                    name: 'weight',
                    type: 'decimal',
                    isNullable: true
                },
                {
                    name: 'created_at',
                    type: 'timestamp  with time zone',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp  with time zone',
                    default: 'now()'
                }     
            ]
          })
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("patients_adjuncts");
      }
}
