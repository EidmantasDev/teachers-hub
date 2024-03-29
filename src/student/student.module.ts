import { StudentsResolver } from './student.resolver';
import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  providers: [StudentsResolver, StudentService],
  exports: [StudentService],
})
export class StudentModule {}
