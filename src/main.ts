import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port:number=3000
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true, //过滤无用属性
    forbidNonWhitelisted:true, //如果有其他属性 停止请求
    transform:true  // 将类类型转为实例
  }))  //验证
  console.log(`http://localhost:${port}`)
  await app.listen(port);
}
bootstrap();
