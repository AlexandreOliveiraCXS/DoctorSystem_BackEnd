import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreatePatients1598395073776 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "patients",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },         
          {
            name: "dateBirth",
            type: "timestamp with time zone",
            isNullable: false,
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "cpf",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "phone",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "status",
            type: "integer",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );

    await queryRunner.query("ALTER TABLE patients ADD COLUMN registry Serial");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("patients");
  }
}
