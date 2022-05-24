import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
    private users:User[]=[
        {
            id:1,
            username:'admin',
            password:'123456',
            avator:'https://space.bilibili.com/17439031?spm_id_from=333.788.0.0',
            createTime:126982692739
        }
    ]//假设为数据库

    
    findAll(){
        return this.users
    }

    findOne(id:number){
        const user=this.users.find(item=>item.id=== +id)
        if(!user){
            throw new NotFoundException(`没有找到${id}用户`)
        } 
        return user
    }

    create(createUserDto:any){
        this.users.push(createUserDto)
    }

    update(id:number,UpdateUserDto:any){
        const existingUser=this.findOne(id);
        if(existingUser){

        }
    }

    remove(id:number){
        const userIndex=this.users.findIndex(item=>item.id===+id)
        if(userIndex>=0){
            this.users.splice(userIndex,1)
        }
    }
}
