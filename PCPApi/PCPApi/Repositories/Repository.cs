﻿using System.Linq.Expressions;
using PCPApi.Infra;

namespace PCPApi.Repositories;

public class Repository<T> : IRepository<T> where T : class
{
    public  readonly ApiDbContext _context;

    public  Repository(ApiDbContext context)
    {
        _context = context;
    }
    
    public IEnumerable<T> GetAll()
    {
        return  _context.Set<T>().ToList();
    }

    public T? Get(Expression<Func<T, bool>> predicate)
    {
        return _context.Set<T>().FirstOrDefault(predicate);
    }

    public T Create(T entity)
    {
        _context.Set<T>().Add(entity);
        _context.SaveChanges();
        return entity;
    }

    public T Update(T entity)
    {
        _context.Set<T>().Update(entity);
        _context.SaveChanges();
        return entity;
    }

    public T Delete(T entity)
    {
        _context.Set<T>().Remove(entity);
        _context.SaveChanges();
        return entity;
    }
}