import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAddress1598406763711 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "address",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "cep",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "country",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "neighborhood",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "city",
            type: "varchar",
            isNullable: false,
          },          
          {
            name: "street",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "number",
            type: "integer",
            isNullable: false,
          },
          {
            name: "complement",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp  with time zone",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp  with time zone",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("address");
  }
}
