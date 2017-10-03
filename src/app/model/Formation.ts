export class Formation {
    constructor(public nom: string,
                public description?: string,
                public prix?: number,
                public dateDebut?: Date,
                public dateFin?: Date){}

    toString () {
      return `${this.nom} | ${this.description} | ${this.prix} | ${this.dateDebut} | ${this.dateFin}`;
    }

    print () {
      console.log( this.toString() );
    }
}
