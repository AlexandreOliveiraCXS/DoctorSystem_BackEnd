import Address from "../models/Address";
import { getRepository } from "typeorm";

interface Request {
  cep: string;
  country: string;
  neighborhood: string;
  city: string;
  street: string;
  number: number;
  complement: string;
}

class CreateAddressService {
  public async execute({
    cep,
    country,
    neighborhood,
    city,
    street,
    number,
    complement,
  }: Request): Promise<Address> {
    const addressRepository = getRepository(Address);

    const checkAddress = await addressRepository.findOne({
      where: {
        cep,
        country,
        neighborhood,
        city,
        street,
        number,
        complement,
      },
    });
    
    if (checkAddress) return checkAddress;

    const address = await addressRepository.create({
      cep,
      country,
      neighborhood,
      city,
      street,
      number,
      complement,
    });

    await addressRepository.save(address);
    return address;
  }
}

export default CreateAddressService;
