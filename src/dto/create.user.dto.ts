export class CreateUserDto {
    id: number;
    data: {
      name: string;
      surname: string;
      age: number;
    };
    bank: {
      card: {
        card_number: string;
        expire_date: string;
        cvv: number;
      };
      issuance_day: string;
      balance: {
        amount: number;
        unit: string;
      };
    };
  }
  