using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PCPApi.Entities;

[Table("company")]
public class Company
{
    [Key]
    [Column("companyId")]
    public int CompanyId { get; set; }

    [MaxLength(255)]
    [Column("companyName")]
    public string CompanyName { get; set; }
}
