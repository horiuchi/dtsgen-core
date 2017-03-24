
export type TargetVersion = 'v2' | 'v1';

export class CommandOptions {
    public files: string[] = [];
    public urls: string[] = [];
    public stdin?: boolean;
    public out?: string;
    public prefix?: string;
    public header?: string;
    public target: TargetVersion = 'v2';

    public isReadFromStdin(): boolean {
        return this.stdin || this.files.length === 0 && this.urls.length === 0;
    }
}


let opts = new CommandOptions();
export default opts;

