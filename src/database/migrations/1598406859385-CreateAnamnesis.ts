import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAnamnesis1598406859385 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "anamnesis",
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
                name: 'description',
                type: 'text',
                isNullable: false
            },
            {
                name: 'created_at',
                type: 'timestamp with time zone',
                default: 'now()'
            },
            {
                name: 'updated_at',
                type: 'timestamp with time zone',
                default: 'now()'
            }     
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("anamnesis");
  }
}
