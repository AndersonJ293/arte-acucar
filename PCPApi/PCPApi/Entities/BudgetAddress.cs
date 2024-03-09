namespace PCPApi.Entities;

using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("budget_address")]
public class BudgetAddress
{
    [Key]
    [Column("addressId")]
    public int AddressId { get; set; }

    [Column("budgetId")]
    public int BudgetId { get; set; }

    [Column("street")]
    public string Street { get; set; }

    [Column("city")]
    public string City { get; set; }

    [Column("addressState")]
    public string AddressState { get; set; }

    [Column("zip_code")]
    public string ZipCode { get; set; }

    [Column("created_at")]
    public DateTime CreatedAt { get; set; }

    [Column("updated_at")]
    public DateTime UpdatedAt { get; set; }

    public Budget Budget { get; set; }
}
