import {isNumber, IsString} from 'class-validator'
export class CreateUserDto {

    @IsString()
    readonly username:string;

    @IsString()
    readonly password:string;
    
    // @IsString({each:true})//验证字符串数组
}
