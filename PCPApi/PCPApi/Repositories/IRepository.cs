using System.Linq.Expressions;

namespace PCPApi.Repositories;

public interface IRepository<T>
{
    IEnumerable<T> GetAll();

    IEnumerable<T> GetAllByCompany(Expression<Func<T, bool>> predicate);
    T? Get(Expression<Func<T, bool>> predicate);
    T Create(T entity);
    T Update(T entity);
    T Delete(T entity);
}
