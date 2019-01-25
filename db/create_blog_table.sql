drop table if exists blog;

create table if not exists blog (
    blog serial primary key,
    blog_author varchar(50),
    blog_text text
);

insert into blog (
    blog_author,
    blog_text
) values (
    'Nick',
    'Some words for you'
);