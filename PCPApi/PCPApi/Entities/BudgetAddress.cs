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
    [Required]
    public int BudgetId { get; set; }

    [Column("street")]
    [Required]
    [MaxLength(255)]
    public string Street { get; set; }

    [Column("city")]
    [MaxLength(255)]
    public string? City { get; set; }

    [Column("housenumber")]
    [Required]
    public int HouseNumber { get; set; }

    [Column("addressState")]
    [MaxLength(255)]
    public string? AddressState { get; set; }

    [Column("zip_code")]
    [MaxLength(20)]
    public string? ZipCode { get; set; }

    [Column("created_at")]
    public DateTime CreatedAt { get; set; }

    [Column("updated_at")]
    public DateTime UpdatedAt { get; set; }

    public Budget Budget { get; set; }
}
