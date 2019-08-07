export class Agent {
    constructor(obj) {
        obj && Object.assign(this, obj)
    }
    
    Name: string;
    IsAwardWinner: boolean;
    Agency: Agency;
    Theme: Theme;
    AverageSalePrice: number;
    SoldProperties: number;
    TotalReviews: number;
    StarRating: number;
}

export class Agency {
    Name: string;
}

export class Theme {
    AvatarImage: string;
}
