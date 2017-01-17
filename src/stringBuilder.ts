class StringBuilder{
    private data: string;
    constructor(input: string){
        this.data = input;
    }

    public getString(): string{
        return this.data;
    }

    public setString(data:string){
        this.data = data;
    }

    public reverse(): void{
        let chars: string[] = this.data.split('');
        let end = chars.length - 1;
        for(var i = 0; i < chars.length / 2; i++){
            let cTmp:string = chars[i];
            chars[i] = chars[chars.length - 1 - i];
            chars[chars.length - 1 - i] = cTmp;
        }

        this.data = chars.join('');
    }
}

let processor:StringBuilder = new StringBuilder('woah');
console.log(processor.getString());
processor.reverse();
console.log(processor.getString());

processor.setString('hello');
console.log(processor.getString());
processor.reverse();
console.log(processor.getString());
