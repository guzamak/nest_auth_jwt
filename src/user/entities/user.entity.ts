import { Entity ,Column,PrimaryGeneratedColumn,BaseEntity, CreateDateColumn, UpdateDateColumn, Unique} from "typeorm";

@Entity("user")
@Unique(["name"])
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    password: string;

    @CreateDateColumn()
    createDate: Date;

    @UpdateDateColumn()
    updateDate: Date;

}
