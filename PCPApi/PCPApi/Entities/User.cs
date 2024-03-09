using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PCPApi.Entities;

public class User
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int UserId { get; set; }

    [ForeignKey("Company")]
    public int CompanyId { get; set; }

    [Required]
    [MaxLength(255)]
    public string DisplayName { get; set; }

    [Required]
    [MaxLength(255)]
    public string Email { get; set; }

    [MaxLength(255)]
    public string PhotoURL { get; set; }

    // Navigation property
    public Company Company { get; set; }
}